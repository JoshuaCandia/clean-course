(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieActorsById(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie): void {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string): boolean {
    return fullName.length > 0 && fullName !== "fernando";
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor ", birthDate);
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
