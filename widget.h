#ifndef WIDGET_H
#define WIDGET_H

#include <QWidget>

namespace Ui {
class Widget;
}

class Widget : public QWidget
{
    Q_OBJECT

public:
    explicit Widget(QWidget *parent = 0);
    ~Widget();

public slots:
    void onWebCall(QString json);
    void populateJavaScriptWindowObject();

private slots:
    void on_go_clicked();

    void on_commitButton_clicked();

    void on_getInfoButton_clicked();

private:
    Ui::Widget *ui;
};

#endif // WIDGET_H
