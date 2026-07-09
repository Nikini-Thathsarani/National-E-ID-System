import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import {
  FaUserShield,
  FaEnvelope,
  FaUserTag,
  FaCheckCircle,
  FaCalendarAlt,
  FaEdit,
  FaShieldAlt,
  FaIdBadge
} from "react-icons/fa";

function Profile() {

  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const currentUser = auth.currentUser;

      if (currentUser) {

        const adminRef = doc(db, "users", currentUser.uid);

        const adminSnap = await getDoc(adminRef);

        if (adminSnap.exists()) {
          setAdmin(adminSnap.data());
        }

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <AdminLayout>

        <h2 className="page-title">Admin Profile</h2>

        <p>Loading profile...</p>

      </AdminLayout>

    );

  }

  return (

    <AdminLayout>

      <h2 className="page-title">Administrator Profile</h2>

      {

        admin ?

        <div className="profile-container">

          {/* Left Card */}

          <div className="profile-card">

            <img
              src={
                admin.photoURL ||
                "https://i.pravatar.cc/200"
              }
              alt="Admin"
              className="profile-avatar"
            />

            <h2>{admin.fullName}</h2>

            <span className="profile-role">

              <FaUserShield />

              {admin.role}

            </span>

            <button className="profile-edit-btn">

              <FaEdit />

              Edit Profile

            </button>

          </div>

          {/* Right Side */}

          <div className="profile-details">

            <div className="profile-section">

              <h3>Personal Information</h3>

              <div className="profile-item">

                <FaEnvelope />

                <span>{admin.email}</span>

              </div>

              <div className="profile-item">

                <FaIdBadge />

                <span>{admin.nic || "Not Available"}</span>

              </div>

              <div className="profile-item">

                <FaUserTag />

                <span>{admin.role}</span>

              </div>

              <div className="profile-item">

                <FaCheckCircle />

                <span>{admin.status || "Active"}</span>

              </div>

              <div className="profile-item">

                <FaCalendarAlt />

                <span>

                  Joined : {

                    admin.createdAt?.toDate

                      ?

                      admin.createdAt.toDate().toLocaleDateString()

                      :

                      "N/A"

                  }

                </span>

              </div>

            </div>

            <div className="profile-section">

              <h3>Security</h3>

              <div className="profile-item">

                <FaShieldAlt />

                <span>Email Verified : {

                  admin.emailVerified

                    ?

                    "Yes"

                    :

                    "No"

                }

                </span>

              </div>

              <div className="profile-item">

                <FaShieldAlt />

                <span>Two Factor Authentication : Disabled</span>

              </div>

              <div className="profile-item">

                <FaShieldAlt />

                <span>Account Status : Active</span>

              </div>

            </div>

          </div>

        </div>

        :

        <p>Administrator profile not found.</p>

      }

    </AdminLayout>

  );

}

export default Profile;