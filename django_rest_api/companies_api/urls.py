from django.urls import path
from . import views

urlpatterns = [
    path('', views.CompanyList.as_view(), name='company_list'),
    path('<int:pk>', views.CompanyDetail.as_view(), name='company_detail')
]
