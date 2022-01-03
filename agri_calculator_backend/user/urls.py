from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user import views

urlpatterns = [
    path('<int:pk>/', views.UserDetails.as_view()),
    path('', views.UserList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)