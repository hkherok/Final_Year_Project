from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from desease import views

urlpatterns = [
    path('', views.DeseaseList.as_view()),
    path('<int:pk>/', views.DeseaseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)