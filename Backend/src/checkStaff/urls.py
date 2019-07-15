from checkStaff import views as view
from django.urls import path

urlpatterns = [
     path('', view.hello_world),
     path('user', view.hello),
]