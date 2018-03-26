from .logger.serializers import LoggerSerializer
from warehouse.models import Warehouse,AccomodationArea,SelectionArea,WorkZone,Cell


class WarehouseSerializer(LoggerSerializer):
    class Meta:
        model = Warehouse
        fields = ('id','name', 'blocked','address_code_separator')

class AccomodationAreaSerializer(LoggerSerializer):
    class Meta:
        model = AccomodationArea
        fields = ('id','name','blocked',)

class SelectionAreaSerializer(LoggerSerializer):
    class Meta:
        model = SelectionArea
        fields = ('id','name','blocked')

class WorkZoneSerializer(LoggerSerializer):
    class Meta:
        model = WorkZone
        fields = ('id','name','blocked',)

class CellSerializer(LoggerSerializer):
   # warehouse = WarehouseSerializer()
   # work_zone = WorkZoneSerializer()
   # selection_area = SelectionAreaSerializer()
   # accomodation_area = AccomodationAreaSerializer()
    class Meta:
        model = Cell
        fields = '__all__'