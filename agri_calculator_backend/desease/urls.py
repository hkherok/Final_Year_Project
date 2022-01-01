from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from desease import views

urlpatterns = [
    path('', views.DiseaseList.as_view()),
    path('<int:pk>/', views.DiseaseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)