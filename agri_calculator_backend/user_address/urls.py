from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user_address import views

urlpatterns = [
    path('division/', views.DivisionList.as_view()),
    path('division/<int:pk>/', views.DivisionDetail.as_view()),
    path('district/', views.DistrictList.as_view()),
    path('district/<int:pk>/', views.DistrictDetail.as_view()),
    path('upazila/', views.UpazilaList.as_view()),
    path('upazila/<int:pk>/', views.UpazilaDetail.as_view()),
    path('', views.AddressList.as_view()),
    path('<int:pk>/', views.AddressDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)