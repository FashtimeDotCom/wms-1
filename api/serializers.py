from .logger.serializers import LoggerSerializer
from warehouse.models import Warehouse,AccomodationArea,SelectionArea


class WarehouseSerializer(LoggerSerializer):
    class Meta:
        model = Warehouse
        fields = ('id','name', 'address_code_separator')

class AccomodationAreaSerializer(LoggerSerializer):
    class Meta:
        model = AccomodationArea
        fields = ('id','name',)

class SelectionAreaSerializer(LoggerSerializer):
    class Meta:
        model = SelectionArea
        fields = ('id','name')