import React from "react";
import axios from "axios";

const Favorites = (current) => {
  const total = JSON.parse(window.localStorage.getItem("total") || "[]");

  const config = {
    headers: {
      Authorization:
        "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTY5NDAwNDEsImV4cCI6MTY5Njk0MzY0MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.BkgnF49c3rQ_wyoZJsD7xH-dtjrYtSOfrI5NyOYiHUnIAHE10hNTA-UekDkqLXi3EcbTvfaAaQP-4lV91itkgQSq467BhNJjvMTMxuwIEXBRQ5-PdUHOPT7wkOrZvXqbt4Evp-2QYTpKRQUQrW3INl6jQCkHubU-gze1tb1K30_UBkAOhJhddpR8usq1YsVctiYiIXI9HUyWVFO8p02NfJFZwJxcqrt1V6Z54zvcEl8BRCGLNvL4xd5uDB3kLlR61xp2scE-VE4-0qC7RgP3QldAC-AccFRVFQ5RDl6KSUz5woVm5Z-0E28qEPUeGSRHF6ufAPbsIMbypk2lX_7Ogw",
    },
  };

  const AddFavorites = (categories) => {
    total.push(categories);
    window.localStorage.setItem("total", JSON.stringify(total));
    const data = {
      email: user.email,
      roles: user.roles,
      password: user.password,
      favoris: total,
    };

    axios.put(`/api/users/${user.id}`, data, config).then(() => {
      alert("Favoris enregistré");

      window.location.reload();
    });
  };

  const RemoveFavorites = (categories) => {
    let filter = total.filter((item) => {
      return item !== categories;
    });
    window.localStorage.setItem("total", JSON.stringify(filter));

    const data = {
      email: user.email,
      roles: user.roles,
      password: user.password,
      favoris: filter,
    };

    axios.put(`/api/users/${user.id}`, data, config).then(() => {
      alert("Favoris supprimé");
      window.location.reload();
    });
  };

  if (total.includes(current)) {
    RemoveFavorites(current);
  } else {
    AddFavorites(current);
  }
};

export default Favorites;
