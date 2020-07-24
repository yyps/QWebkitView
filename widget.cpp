#include "widget.h"
#include "ui_widget.h"
#include <QDebug>
#include <QWebFrame>
#include <QMessageBox>
#include <QWebElement>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QTextCodec>

Widget::Widget(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Widget)
{
    ui->setupUi(this);

    // 加载本地html资源
    ui->webView->load(QUrl("qrc:/html/login.html"));

    // 此处必须通过关联信号槽的方式链接，否则js调用Object对象时不会响应回调函数
    connect(ui->webView->page()->mainFrame(),
            SIGNAL(javaScriptWindowObjectCleared()), this, SLOT(populateJavaScriptWindowObject()));
}

Widget::~Widget()
{
    ui->webView->settings()->clearMemoryCaches();
    ui->webView->stop();
    ui->webView->close();
    ui->webView->deleteLater();
    delete ui;
}

// Web回调
void Widget::onWebCall(QString json)
{
    qDebug() << " source onWebCall json: " << json;
    do
    {
        QJsonParseError err;
        QJsonDocument doc = QJsonDocument::fromJson(json.toUtf8(), &err);
        if (err.error != QJsonParseError::NoError)
        {
            qDebug() << "Parse Json err: " << err.errorString().toUtf8().data();
            break;
        }

        QJsonObject obj = doc.object();

        qDebug() << obj["id"].toString().toUtf8().data();
        qDebug() << obj["username"].toString().toUtf8().data();
        qDebug() << obj["passwd"].toString().toUtf8().data();

        ui->lineEdit_id->setText(obj.take("id").toString());
        ui->lineEdit_2->setText(obj.take("username").toString());
        ui->lineEdit_3->setText(obj.take("passwd").toString());

    } while (false);
}

void Widget::populateJavaScriptWindowObject()
{
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject(QString("webCallback"), this);
}

void Widget::on_go_clicked()
{
    QString val = QString("test(\"嘿嘿嘿\");");
    ui->webView->page()->mainFrame()->evaluateJavaScript(val);
}

void Widget::on_commitButton_clicked()
{
    QString val_id = ui->lineEdit_id->text();
    QString val1 = ui->lineEdit_2->text();
    QString val2 = ui->lineEdit_3->text();

    QJsonDocument doc;
    QJsonObject obj;
    // add username
    obj.insert("username", QJsonValue(val1));
    // add passwd
    obj.insert("passwd", QJsonValue(val2));
    // add id
    obj.insert("id", QJsonValue(val_id));
    // add taskinfo
    QJsonArray arr;
    QJsonObject child1, child2, child3;
    child1.insert("id", "file_check");
    child1.insert("range", "c:d:e:f:");
    child1.insert("policy", "no content");
    arr.append(child1);
    child2.insert("id", "normal_check");
    child2.insert("range", "c:d:e:f:");
    child2.insert("policy", "no content");
    arr.append(child2);
    child3.insert("id", "deep_check");
    child3.insert("range", "c:d:e:f:");
    child3.insert("policy", "no content");
    arr.append(child3);
    //   obj.insert("task", arr);
    doc.setObject(obj);
    QString val_(doc.toJson(QJsonDocument::Compact));
    //  qDebug() << val_;
    //  val_.replace("\"", "\'");
    //  qDebug() << val_;
    //   qDebug() << obj["username"].toString().toUtf8().data();
    //   qDebug() << obj["passwd"].toString().toUtf8().data();
    //   qDebug() << obj.contains("312");
    //  QString val3 = "{\'id\':\'1001\'}";

    //    QString val3 = "{\"id\":\"1001\"}";
    //    val3.replace("\"", "\'");
    //    qDebug() << val3;

    QString val = QString("call_from_Qt(\'%1\');").arg(val_);
    qDebug() << val;
    ui->webView->page()->mainFrame()->evaluateJavaScript(val);
}

void Widget::on_getInfoButton_clicked()
{
    QString val = QString("call_to_Qt();");
    ui->webView->page()->mainFrame()->evaluateJavaScript(val);
}
