#-------------------------------------------------
#
# Project created by QtCreator 2020-07-20T13:16:32
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets webkit webkitwidgets

TARGET = WebViewDemo_t
TEMPLATE = app


SOURCES += main.cpp\
        widget.cpp

HEADERS  += widget.h

FORMS    += widget.ui \
    webui.ui

RESOURCES += \
    html.qrc
