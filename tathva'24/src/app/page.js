import CartridgeMob from "./components/workshopCartridge/cartridge_mob";

export default function Home() {
  return (
    <div>
      <div className="custom-sm:hidden font-jakarta">
        {/* for desktop */}
        <div className="">
          <CartridgeMob
            imageSrc="/WorkshopCartridge/workshop.jpg"
            title="DATA SCIENCE"
            price="₹999"
            date="27 OCT"
            registrationLink="https://www.google.com/"
            description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
          />
        </div>
      </div>

      <div className="hidden custom-sm:flex w-full flex items-center justify-center font-jakarta bg-black">
        <div className="flex flex-col">
          <div className="">
            <CartridgeMob
              imageSrc="/WorkshopCartridge/workshop.jpg"
              title="DATA SCIENCE"
              price="₹999"
              date="27 OCT"
              registrationLink="https://www.google.com/"
              description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
            />
          </div>

          <div className="">
            <CartridgeMob
              imageSrc="/WorkshopCartridge/workshop.jpg"
              title="DATA SCIENCE"
              price="₹999"
              date="27 OCT"
              registrationLink="https://www.google.com/"
              description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
            />
          </div>

          <div className="">
            <CartridgeMob
              imageSrc="/WorkshopCartridge/workshop.jpg"
              title="DATA SCIENCE"
              price="₹999"
              date="27 OCT"
              registrationLink="https://www.google.com/"
              description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
            />
          </div>

          <div className="">
            <CartridgeMob
              imageSrc="/WorkshopCartridge/workshop.jpg"
              title="DATA SCIENCE"
              price="₹999"
              date="27 OCT"
              registrationLink="https://www.google.com/"
              description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
