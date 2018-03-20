from rest_framework import  permissions
from .logger.viewsets import LoggerViewSet


from .serializers import WarehouseSerializer, Warehouse,AccomodationArea, AccomodationAreaSerializer,SelectionAreaSerializer,SelectionArea


class WarehouseViewSet(LoggerViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer
    permission_classes = (
        permissions.IsAuthenticated,
        permissions.DjangoObjectPermissions,
        permissions.DjangoModelPermissions
    )

class AccomodationAreaViewSet(LoggerViewSet):
    queryset = AccomodationArea.objects.all()
    serializer_class = AccomodationAreaSerializer
    permission_classes = (
                            permissions.IsAuthenticated,
                            permissions.DjangoObjectPermissions,
                            permissions.DjangoModelPermissions
    )

class SelectionAreaViewSet(LoggerViewSet):
    queryset = SelectionArea.objects.all()
    serializer_class = SelectionAreaSerializer
    permission_classes = (
                            permissions.IsAuthenticated,
                            permissions.DjangoObjectPermissions,
                            permissions.DjangoModelPermissions
    )