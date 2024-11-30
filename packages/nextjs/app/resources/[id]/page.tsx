import ResourcePage from "./getResource";

const GetResourceId = async ({ params }: { params: Promise<{ id: number }> }) => {
  const resourceId = (await params).id;

  return <ResourcePage resourceId={resourceId} />;
};

export default GetResourceId;
