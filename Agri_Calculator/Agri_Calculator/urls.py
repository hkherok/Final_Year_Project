from django.urls import path

from . import views

app_name = 'Age_Calculator'
urlpatterns = [
    path('signin/', views.singin, name='signin'),
    path('singup/', views.sing_up, name='signup'),
    path('loginuser/', views.loginuser, name='loginuser'),
   # path('logoutuser/', views.logoutuser, name='logoutuser'),
    path('',views.dashbord,name='dashbord'),
    path('blog/',views.blog,name='blog'),
    path('contuct_us/', views.contuct_us, name='contact_us'),

    path('message/', views.message, name='message'),
    path('website/', views.website, name='website'),
    path('total_service/', views.total_service, name='total_service'),

                   path('register/', views.register, name='register'),
                   path('problem/', views.Problem, name='problem'),
                   path('Attention/', views.Attention, name='attion'),

    # problem
    path('problem1/',views.problem1,name='problem1'),
    path('problem2/',views.problem2,name='problem2'),
    path('problem3/', views.problem3, name='problem3'),
    path('problem4/', views.problem4, name='problem4'),
    path('problem5/', views.problem5, name='problem5'),
    path('problem6/', views.problem6, name='problem6'),
    path('problem7/', views.problem7, name='problem7'),
]
