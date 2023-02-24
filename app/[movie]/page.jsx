import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => {
    movie: toString(movie.id);
  });
}

const MovieDetail = async ({ params }) => {
  const { movie } = params;
  const imagePath = `https://image.tmdb.org/t/p/original`;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="bg-green-600 my-2 py-2 text-sm px-4 inline-block rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imagePath + res.backdrop_path}
        width={1000}
        height={1000}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
};

export default MovieDetail;
