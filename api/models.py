# coding=utf-8
from django.db import models

# Create your models here.

u"""
"100g_calories": 337.7443,
"100g_carbs": 69.1678,
"100g_fat": 2.565,
"100g_protein": 14.118,
"100g_water": 12.63,
"all_name": "小麥,",
"category": "穀物類",
"id": 0,
"name": "小麥",
"piece_weight": 0,
"trivial": "",
"unit_calories": 0,
"unit_carbs": 0,
"unit_fat": 0,
"unit_protein": 0,
"unit_water": 0
"""


class Nutrition(models.Model):
    calories_100g = models.FloatField(default=0)
    carbs_100g = models.FloatField(default=0)
    fat_100g = models.FloatField(default=0)
    protein_100g = models.FloatField(default=0)
    water_100g = models.FloatField(default=0)
    all_name = models.CharField(default=0, max_length=100)
    category = models.CharField(default=0, max_length=200)
    name = models.CharField(default=0, max_length=200)
    piece_weight = models.FloatField(default=0)
    trivial = models.FloatField(default=0)
    calories_unit = models.FloatField(default=0)
    carbs_unit = models.FloatField(default=0)
    fat_unit = models.FloatField(default=0)
    protein_unit = models.FloatField(default=0)
    water_unit = models.FloatField(default=0)
