<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;


class DashboardConctrollerController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard_conctroller')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('dashboard_conctroller/index.html.twig', [
            'controller_name' => 'DashboardConctrollerController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')

        ]);
    }
}
