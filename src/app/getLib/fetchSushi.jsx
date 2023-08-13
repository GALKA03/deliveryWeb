
export const getSushi=async()=> {
  const res = await fetch("http://localhost:3000/api/sushi", {
      next: {revalidate:10},
  });

    if (!res.ok) {
       return {
      notFound: true,
    }
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getSushiId = async (id) => {
    const res = await fetch(`http://localhost:3000/api/sushi/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return {
            notFound: true,
        }
    }

    return res.json();
}