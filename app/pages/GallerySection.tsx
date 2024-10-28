import Image from "next/image";
const GallerySection = () => {
  return (
    <div>
      <section className="py-16 px-8 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">OUR GALLERY</h2>
        
        {/* Additional Text */}
        <p className="text-lg text-gray-700 mb-8">
          Mellifera is a true beehive of activity! Check out the latest news and events in our image gallery and see for yourself.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Gallery Images */}
          <Image
            src="/HoneyGalllery1.jpg"
            height={100}
            width={100}
            alt="Gallery Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
          />
         <Image
            src="/HoneyGalllery2.jpg"
            height={100}
            width={100}
            alt="Gallery Image 2"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
          />
          <Image
            src="/HoneyGallery3.jpg"
            height={100}
            width={100}
            alt="Gallery Image 3"
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
          />
          {/* Repeat for other gallery images */}
        </div>
      </section>
    </div>
  );
}

export default GallerySection;
