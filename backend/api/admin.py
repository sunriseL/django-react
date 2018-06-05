# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from api.models import GoodsModel,Cart,Order
admin.site.register(GoodsModel)
admin.site.register(Cart)
admin.site.register(Order)
# Register your models here.
