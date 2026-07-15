from django.shortcuts import render
from rest_framework import generics
from .models import Photo
from .serializers import PhotoSerializer

# Create your views here.


class PhotoListView(generics.ListAPIView):
    queryset = Photo.objects.all().order_by('-created_at')
    serializer_class = PhotoSerializer