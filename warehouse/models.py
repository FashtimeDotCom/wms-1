from django.db import models
from base.models import AbstraktOwner


class Warehouse(models.Model):
    name = models.CharField(max_length=100)
    blocked = models.BooleanField(default=False)
    address_code_separator = models.CharField(max_length=1)

    def __str__(self):
        return self.name
    class Meta:
        permissions =(
            ("view_warehouse", "Для вас не доступен склад"),
        )

class AccomodationArea(models.Model):
    name = models.CharField(max_length=100)
    blocked = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class SelectionArea(models.Model):
    name = models.CharField(max_length=100)
    blocked = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class WorkZone(models.Model):
    name = models.CharField(max_length=100)
    blocked = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class Cell(models.Model):
    warehouse = models.ForeignKey(Warehouse,null=False,on_delete=models.CASCADE)
    accomodation_area = models.ForeignKey(AccomodationArea,null=True,on_delete=models.CASCADE)
    selection_area = models.ForeignKey(SelectionArea,null=True,on_delete=models.CASCADE)
    rack = models.CharField(max_length=3)
    tier = models.CharField(max_length=3)
    position = models.CharField(max_length=3)
    blocked = models.BooleanField(default=False)
    work_zone = models.ForeignKey(WorkZone,null=True,on_delete=models.CASCADE)

    def __str__(self):
        return '%s%s%s%s%s' % (                     self.rack,
                                                    self.warehouse.address_code_separator,
                                                    self.tier,
                                                    self.warehouse.address_code_separator,
                                                    self.position
                                    )