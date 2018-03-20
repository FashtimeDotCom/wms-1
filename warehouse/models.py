from django.db import models
from base.models import AbstraktOwner
from django.utils.translation import ugettext_lazy as _


class Warehouse(models.Model):
    name = models.CharField(max_length=100, verbose_name=_(u'Имя'))
    blocked = models.BooleanField(default=False, verbose_name=_(u'Заблокирован'))
    address_code_separator = models.CharField(max_length=1,verbose_name=_(u'Разделитель кода'))

    def __str__(self):
        return self.name


class AccomodationArea(models.Model):
    name = models.CharField(max_length=100, verbose_name=_(u'Имя'))
    blocked = models.BooleanField(default=False, verbose_name=_(u'Заблокирован'))
    def __str__(self):
        return self.name

class SelectionArea(models.Model):
    name = models.CharField(max_length=100, verbose_name=_(u'Имя'))
    blocked = models.BooleanField(default=False, verbose_name=_(u'Заблокирован'))
    def __str__(self):
        return self.name

class WorkZone(models.Model):
    name = models.CharField(max_length=100, verbose_name=_(u'Имя'))
    blocked = models.BooleanField(default=False, verbose_name=_(u'Заблокирован'))
    def __str__(self):
        return self.name

class Cell(models.Model):
    warehouse = models.ForeignKey(Warehouse,null=False,on_delete=models.CASCADE,verbose_name=_(u'Склад'))
    accomodation_area = models.ForeignKey(AccomodationArea,null=True,on_delete=models.CASCADE, verbose_name=_(u'Область размещения'))
    selection_area = models.ForeignKey(SelectionArea,null=True,on_delete=models.CASCADE,verbose_name=_(u'Облать отбора'))
    rack = models.CharField(max_length=3,verbose_name=_(u'Стелаж'))
    tier = models.CharField(max_length=3, verbose_name=_(u'Ярус'))
    position = models.CharField(max_length=3, verbose_name=_(u'Позиция'))
    blocked = models.BooleanField(default=False, verbose_name=_(u'Заблокирована'))
    work_zone = models.ForeignKey(WorkZone,null=True,on_delete=models.CASCADE, verbose_name=_(u'Рабочая зона'))

    def __str__(self):
        return '%s%s%s%s%s' % (                     self.rack,
                                                    self.warehouse.address_code_separator,
                                                    self.tier,
                                                    self.warehouse.address_code_separator,
                                                    self.position
                                    )
    class Meta:
        verbose_name = _(u'Cell')