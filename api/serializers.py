from rest_framework import serializers
from warehouse.models import Warehouse

class WarehouseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Warehouse
        fields = ('name', 'address_code_separator')
