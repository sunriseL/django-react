#coding:utf-8#
from django.conf.urls import url
from rest_framework.authtoken import views as drf_views
from api.views import good_list
urlpatterns = [
    url(r'goods/',good_list),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth')
]
