from .permisions import PermViewSets

from .serializers import WarehouseSerializer, \
    Warehouse,AccomodationArea,\
    AccomodationAreaSerializer,\
    SelectionAreaSerializer,\
    SelectionArea,\
    WorkZone,\
    WorkZoneSerializer,\
    Cell,\
    CellSerializer


class WarehouseViewSet(PermViewSets):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer

class AccomodationAreaViewSet(PermViewSets):
    queryset = AccomodationArea.objects.all()
    serializer_class = AccomodationAreaSerializer


class SelectionAreaViewSet(PermViewSets):
    queryset = SelectionArea.objects.all()
    serializer_class = SelectionAreaSerializer

class WorkZoneViewSet(PermViewSets):
    queryset = WorkZone.objects.all()
    serializer_class = WorkZoneSerializer


class CellViewSet(PermViewSets):
    queryset = Cell.objects.all()
    serializer_class = CellSerializer