<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;


class CustomController extends AbstractController
{
    #[Route('/custom', name: 'app_connexion')]
    public function index( SerializerInterface $serializer): Response
    {
        return $this->render('custom/index.html.twig', [
            'controller_name' => ' CustomController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')

        ]);
    }
}
