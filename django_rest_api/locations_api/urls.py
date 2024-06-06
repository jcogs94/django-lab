from django.urls import path
from . import views

urlpatterns = [
    path('', views.LocationList.as_view(), name='location_list'),
    path('<int:pk>', views.LocationDetail.as_view(), name='location_detail')
]
