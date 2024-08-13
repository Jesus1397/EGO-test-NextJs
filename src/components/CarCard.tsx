"use client";

import { CarCardProps } from "@/models/CarModel";
import Link from "next/link";
import Image from "next/image";
import "@/styles/CarCard.scss";

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 car-row d-flex align-items-stretch justify-content-center">
      <Link href={`/models/${car.id}`} className="text-style custom-link">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title text-center">{car.name}</h5>
            <p className="card-text">
              {car.year} | ${car.price.toLocaleString()}
            </p>
            <Image
              src={car.thumbnail!}
              width={236}
              height={132}
              className="card-img-top"
              alt={car.name}
            />
          </div>
          <div className="view-model-button">Ver Modelo</div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
