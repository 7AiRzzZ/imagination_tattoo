<?php

namespace App\DataFixtures;

use App\Entity\Creation;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Tattoo;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        

        $images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlip0-IEi97q2Fhgfh9IchJ2La6Luz6Esx9w&usqp=CAU", "/images/logo-imgtattoo.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lXLsS_I0RSJXk88PRl1cfP0Xcvmv0sSDNg&usqp=CAU", "https://bleunoirtattoo.com/wp-content/uploads/2023/09/suminagashi-cou3-violettepoinclou-600x600.jpg"];

            
        
        for ($i = 0; $i < 50; $i++) {
            $rand_images = array_rand($images, 2);
            $result = array($images[$rand_images[1]]);
        
            $tattoo = new Tattoo();
            $tattoo->setCategories('Catégorie : ' . $i);
            $tattoo->setImages(implode($result));
            $tattoo->setDescription('Description :' . $i);

            $creation = new Creation();
            $creation->setImage('https://usualcom.net/wp-content/uploads/2017/09/12364849-Planet-Earth-and-human-eye-Stock-Photo.jpg');
            $creation->setDescription('Description :' . $i);
            
            $manager->persist($tattoo);
            $manager->persist($creation);
        }
        
        $manager->flush();
    }
}
