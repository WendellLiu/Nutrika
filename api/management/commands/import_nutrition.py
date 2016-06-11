import json
import os
from django.core.management.base import BaseCommand
from api.models import Nutrition
from fda.settings import BASE_DIR


class Command(BaseCommand):
    help = 'Import nutrition.json to Nutrition in db'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Start importing'))
        with open(os.path.join(BASE_DIR, 'api/nutrition.json')) as data_file:
            data_list = json.load(data_file)

            for data in data_list:
                self.stdout.write(self.style.SUCCESS('importing %s') % data['name'])

                tmp_nutrition = Nutrition(
                    calories_100g=data['calories_100g'] if data['calories_100g'] else 0,
                    carbs_100g=data['carbs_100g'] if data['carbs_100g'] else 0,
                    fat_100g=data['fat_100g'] if data['fat_100g'] else 0,
                    protein_100g=data['protein_100g'] if data['protein_100g'] else 0,
                    water_100g=data['water_100g'] if data['water_100g'] else 0,
                    category=data['category'] if data['category'] else '',
                    name=data['name'] if data['name'] else '',
                    piece_weight=data['piece_weight'] if data['piece_weight'] else 0,
                    trivial=data['trivial'] if data['trivial'] else '',
                    calories_unit=data['calories_unit'] if data['calories_unit'] else 0,
                    carbs_unit=data['carbs_unit'] if data['carbs_unit'] else 0,
                    fat_unit=data['fat_unit'] if data['fat_unit'] else 0,
                    protein_unit=data['protein_unit'] if data['protein_unit'] else 0,
                    water_unit=data['water_unit'] if data['water_unit'] else 0,
                    )
                tmp_nutrition.save()

            self.stdout.write(self.style.SUCCESS('Successfully import nutrition.json'))
