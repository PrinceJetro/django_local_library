from django.urls import path

from . import views

urlpatterns =[
    path('', views.home, name="home"),
    path('gadget.html', views.Gadgets, name = 'gadget'),
    path('register', views.register, name = "register"),
    path('login', views.login, name="login"),
    path('logout', views.logout, name="logout"),
]
