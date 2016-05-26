from django.shortcuts import render
from .models import Nutrition
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NutritionSerializer
from django.db.models import Q

# Create your views here.

class NutritionJson(APIView):
    """
    export all nutrition data for json form
    """

    @staticmethod
    def get(request):
        name = request.GET.get('name')

        if name:
            nutrition_list = Nutrition.objects.filter(Q(name__contains=name) | Q(trivial__contains=name))\
                                                .filter(piece_weight__gt=0)

        else:
            nutrition_list = Nutrition.objects.all()

        serializer = NutritionSerializer(nutrition_list, many=True)

        return Response(serializer.data)
