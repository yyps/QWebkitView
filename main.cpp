#include "widget.h"
#include <QApplication>
#include <QLibrary>
#include <QDebug>
#include <QMessageBox>

int main(int argc, char *argv[])
{  
    QApplication a(argc, argv);
    Widget w;
    w.show();

 //   QString call;
 //   call = QString("call %1").arg(function_call_sub(5,6));
 //   QMessageBox::warning(NULL, "", call);


 //   QString call;
  //  call = QString("lib call %1").arg(function_lib_call(5,6));
  //  QMessageBox::warning(NULL, "", call);



    /*

    QLibrary lib2("win_dll.dll");
    if (lib2.load())
    {
        qDebug() << "load win_dll ok2!";

        FUNC func = (FUNC)lib2.resolve("win_function_call");
        if (func)
        {
            qDebug() << "load win_function_call ok!";
            qDebug() << func(3, 5);
        }
        else
        {
            qDebug() << "load win_function_call err!";
        }
    }
    else
    {
        qDebug() << "load error!";
    }

    */

    return a.exec();
}
