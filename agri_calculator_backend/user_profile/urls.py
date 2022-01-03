from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user_profile import views

urlpatterns = [
    path('<int:pk>/', views.ProfileDetail.as_view()),
    path('', views.ProfileList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)