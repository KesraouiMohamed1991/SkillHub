import Card from "../Components/Card";

function Services() {
  const data = [
    {
      title: 'Web design',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Graphic design',
      img: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Photography',
      img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Motion Design',
      img: 'https://images.unsplash.com/photo-1612742491367-04acdf256856?q=80&w=3261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

    return (
<>         
      <div id="services" className="min-h-screen flex flex-col items-center justify-center w-full ">
        <h1 className="py-16 text-5xl ">Our Creatives</h1>

        <div className="flex justify-center items-center flex-wrap gap-10 w-full  ">
        {data.map((service, index) => (
        <Card key={index} title={service.title} url={service.img} />
        ))}
                </div>
                
    </div></>
  );
}

export default Services;
