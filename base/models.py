from django.db import models

# Create your models here.
class AbstraktDateTimeModel(models.Model):
    created = models.DateTimeField(auto_created=True)
    edited = models.DateTimeField(auto_now_add=True)
    class Meta:
        abstract = True
