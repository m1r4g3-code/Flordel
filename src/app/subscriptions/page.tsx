import styles from "./page.module.css";
import { Check } from "lucide-react";

export const metadata = {
  title: "Subscriptions | Flordel Florist",
  description: "Receive fresh, luxury blooms on your schedule with a Flordel subscription.",
};

const plans = [
  {
    name: "Classic",
    price: "$150",
    frequency: "per delivery",
    features: [
      "Seasonal blooms",
      "Standard elegant vase",
      "Complimentary delivery",
      "Pause or cancel anytime"
    ]
  },
  {
    name: "Luxe",
    price: "$250",
    frequency: "per delivery",
    popular: true,
    features: [
      "Premium imported flowers",
      "Ceramic or glass premium vase",
      "Complimentary delivery",
      "Priority customer support",
      "Pause or cancel anytime"
    ]
  },
  {
    name: "Grand",
    price: "$500",
    frequency: "per delivery",
    features: [
      "Rare & exotic varieties",
      "Statement centerpiece vessel",
      "White-glove delivery",
      "Dedicated floral concierge",
      "Exclusive event invites"
    ]
  }
];

export default function Subscriptions() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.header}`}>
        <h1 className={styles.title}>Floral Subscriptions</h1>
        <p className={styles.subtitle}>
          Elevate your space with ongoing deliveries of New York&apos;s finest botanical arrangements.
        </p>
      </div>

      <div className={`container ${styles.grid}`}>
        {plans.map((plan, i) => (
          <div key={i} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
            {plan.popular && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.cardHeader}>
              <h2 className={styles.planName}>{plan.name}</h2>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.frequency}>{plan.frequency}</span>
              </div>
            </div>
            
            <ul className={styles.features}>
              {plan.features.map((feature, j) => (
                <li key={j}>
                  <Check size={18} className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.btn}`}>
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
