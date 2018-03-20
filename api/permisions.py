from .logger.viewsets import LoggerViewSet
from rest_framework import  permissions

class PermViewSets(LoggerViewSet):
    permission_classes = (
        permissions.IsAuthenticated,
        permissions.DjangoObjectPermissions,
        permissions.DjangoModelPermissions
    )