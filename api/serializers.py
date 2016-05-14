from rest_framework import serializers
from models import Nutrition


class NutritionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutrition
        fields = ('calories_100g', 'carbs_100g', 'fat_100g', 'protein_100g', 'water_100g', 'all_name',
        			'category', 'name', 'piece_weight', 'trivial', 'unit_calories', 'unit_carbs', 'unit_fat',
        			'unit_protein', 'unit_water')
