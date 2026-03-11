"""Tests for 17Katas waitlist API endpoints"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestHealth:
    def test_api_health(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json()["message"] == "17Katas API is live"


class TestBrandWaitlist:
    """Brand waitlist endpoint tests"""

    def test_submit_brand_valid(self):
        payload = {"name": "TEST_Brand", "email": "test_brand@test.com", "brand_name": "TEST_Co", "budget_range": "1L-2L"}
        r = requests.post(f"{BASE_URL}/api/waitlist/brand", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["success"] is True
        assert "message" in data

    def test_submit_brand_missing_field(self):
        payload = {"name": "TEST_Brand", "email": "test@test.com", "brand_name": "TEST_Co"}
        r = requests.post(f"{BASE_URL}/api/waitlist/brand", json=payload)
        assert r.status_code == 422

    def test_submit_brand_invalid_email(self):
        payload = {"name": "TEST_Brand", "email": "not-an-email", "brand_name": "TEST_Co", "budget_range": "5L+"}
        r = requests.post(f"{BASE_URL}/api/waitlist/brand", json=payload)
        # backend accepts any string for email, just check it doesn't 500
        assert r.status_code in [200, 422]


class TestDistributorWaitlist:
    """Distributor waitlist endpoint tests"""

    def test_submit_distributor_valid(self):
        payload = {"name": "TEST_Dist", "email": "test_dist@test.com", "handle": "@testhandle", "primary_skill": "video-editing"}
        r = requests.post(f"{BASE_URL}/api/waitlist/distributor", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["success"] is True
        assert "message" in data

    def test_submit_distributor_missing_field(self):
        payload = {"name": "TEST_Dist", "email": "test@test.com", "handle": "@test"}
        r = requests.post(f"{BASE_URL}/api/waitlist/distributor", json=payload)
        assert r.status_code == 422

    def test_get_waitlist(self):
        r = requests.get(f"{BASE_URL}/api/waitlist")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
