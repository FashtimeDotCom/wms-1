from django.conf.urls import url
from .views import WarehouseList

urlpatterns = [
    url(r'^$', WarehouseList.as_view(), name='warehouse-list'),
]
