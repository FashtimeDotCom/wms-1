from django.views.generic.list import ListView

from .models import Warehouse

class WarehouseList(ListView):
    model = Warehouse
    template_name = "warehouse/warehouses.html"
