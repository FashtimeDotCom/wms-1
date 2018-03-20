from .permisions import PermViewSets

from .serializers import WarehouseSerializer, Warehouse,AccomodationArea, AccomodationAreaSerializer,SelectionAreaSerializer,SelectionArea


class WarehouseViewSet(PermViewSets):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer

class AccomodationAreaViewSet(PermViewSets):
    queryset = AccomodationArea.objects.all()
    serializer_class = AccomodationAreaSerializer


class SelectionAreaViewSet(PermViewSets):
    queryset = SelectionArea.objects.all()
    serializer_class = SelectionAreaSerializer
