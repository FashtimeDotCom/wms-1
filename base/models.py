from django.db import models
from wms.users.models import User
# Create your models here.
class AbstraktOwner(models.Model):
    owner = models.ForeignKey(User,models.CASCADE,null=True)
    class Meta:
        abstract = True
