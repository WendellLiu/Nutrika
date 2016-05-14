from django.shortcuts import render
from .models import Nutrition
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NutritionSerializer

# Create your views here.

class AllNutritionJson(APIView):
    """
    list all items in specified location
    """

    @staticmethod
    def get(request):
        nutrition_list = Nutrition.objects.all()

        serializer = NutritionSerializer(nutrition_list, many=True)

        return Response(serializer.data)