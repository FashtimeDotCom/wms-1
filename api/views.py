from rest_framework import viewsets, permissions

from .serializers import WarehouseSerializer, Warehouse


class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer
    permission_classes = (permissions.IsAuthenticated,permissions.DjangoObjectPermissions,permissions.DjangoModelPermissions)
