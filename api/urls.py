from django.conf.urls import url, include
from rest_framework import routers
from .views import WarehouseViewSet,AccomodationAreaViewSet, SelectionAreaViewSet,CellViewSet,WorkZoneViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'warehouses', WarehouseViewSet)
router.register(r'accomodations', AccomodationAreaViewSet)
router.register(r'selections', SelectionAreaViewSet)
router.register(r'zones', WorkZoneViewSet)
router.register(r'cells',CellViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]