<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CategorieController extends AbstractController
{
    #[Route('/categorie', name: 'app_categorie')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('categorie/index.html.twig', [
            'controller_name' => 'CategorieController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }

    #[Route('/categorie/{id}', name: 'app_categorie_id')]
    public function showId(SerializerInterface $serializer): Response
    {
        return $this->render('categorie/index.html.twig', [
            'controller_name' => 'CategorieController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
