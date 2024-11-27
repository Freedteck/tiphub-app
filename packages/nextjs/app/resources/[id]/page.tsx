const ResourcePage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const resourceId = (await params).id;
  return (
    <main className="py-8 flex flex-col gap-8">
      <div>
        <h2 className="text-center font-bold text-4xl">{`Resource ${resourceId}`}</h2>
      </div>
      <div className="container mx-auto flex flex-col gap-2">
        <p className="border-2 rounded-lg border-base-300 self-start px-4 py-2">Written By: 0x0000....000000</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ipsa obcaecati illo veritatis harum.
          Laboriosam nesciunt quod cum voluptatibus quaerat reprehenderit illum quae ipsa nobis asperiores. Animi
          placeat odit optio adipisci obcaecati dolores similique id ut, et cumque in impedit earum repellat itaque quia
          debitis nam velit? Possimus adipisci voluptatem blanditiis ut rerum veritatis totam dignissimos aliquid, iure
          tempora nihil saepe eveniet ratione laudantium dicta ipsum recusandae corporis alias error vero accusamus.
          Perspiciatis corporis laboriosam reiciendis voluptatibus quo facilis iure natus delectus eos, nulla excepturi
          similique. Debitis, tempora molestias saepe enim ratione neque. Ducimus ab ad nesciunt, iure eligendi quae
          modi ratione inventore fugit dolor, dignissimos corrupti iusto optio esse ipsam quisquam voluptatem hic velit
          aliquam deserunt. Aperiam minus rem totam quia ex ullam aliquam aut nobis reprehenderit sint similique
          molestias commodi dignissimos, quasi placeat unde dolores in delectus. Sunt fugiat natus consectetur
          assumenda, dolorum animi ducimus voluptate facere vitae expedita delectus dolores unde quia? Dolores quod
          sapiente dolore et quam enim. Accusamus quod nobis pariatur illum, suscipit doloribus sequi fuga deleniti
          distinctio dolorem ratione voluptatum, doloremque facere magni perferendis nam ipsum est adipisci laboriosam
          odit similique! Est, commodi. Voluptatem sequi distinctio magni aliquid nisi magnam architecto sunt cumque
          eaque voluptates, voluptatum rem tempora est excepturi quo ducimus voluptate perferendis doloremque? Alias
          adipisci laboriosam autem quisquam ipsum eum molestias sunt maxime quaerat cumque quae, temporibus facilis.
          Consequuntur beatae perspiciatis expedita? Temporibus dignissimos est ullam, deserunt similique ab esse! Non
          fuga mollitia reiciendis corporis culpa deserunt aliquam minus vitae doloribus. Deserunt veritatis a obcaecati
          itaque quibusdam. Dicta ratione, delectus repudiandae incidunt, quo et ducimus dolorem dolore veniam, ad neque
          molestias! Repellat, suscipit? Iusto tempore atque temporibus totam facere possimus laudantium ducimus
          accusantium, optio alias sit veritatis omnis. Porro voluptates nihil error ab quas eum aliquid consequuntur
          ratione, praesentium, libero reiciendis delectus.
        </p>
      </div>
      <hr className="bg-primary" />
      <div></div>
    </main>
  );
};

export default ResourcePage;
